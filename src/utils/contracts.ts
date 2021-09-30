import "@ethersproject/shims"
import { BigNumber, ethers } from "ethers";
import { getContractObj } from ".";
import { NFTMintEngineDetail } from "./typs";

export async function purchase(chainId, provider, account, numberOfTokens) {
    const GenieQuestContract = getContractObj('GenieQuest', chainId, provider);
    try {
        const ownerAddress: string = await GenieQuestContract.owner();
        var nftPrice: BigNumber = await GenieQuestContract.PRICE();

        if (ownerAddress.toLocaleLowerCase() === account.toLocaleLowerCase())
            nftPrice = BigNumber.from(0);

        const tx = await GenieQuestContract.purchase(numberOfTokens, {
            value: nftPrice.mul(numberOfTokens)
        });
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getEngineInfo(chainId, library) {
    const GenieQuestContract = getContractObj('GenieQuest', chainId, library);
    try {
        const [
            totalSupply,
            maxSupply,
            mintPrice,
            purchaseLimit,
            ownerAddress
        ] = await Promise.all([
            GenieQuestContract.totalSupply(),
            GenieQuestContract.GQ_MAX(),
            GenieQuestContract.PRICE(),
            GenieQuestContract.PURCHASE_LIMIT(),
            GenieQuestContract.owner(),
        ]);

        const nftMintDetail: NFTMintEngineDetail = {
            totalSupply: parseInt(totalSupply.toString()),
            maxSupply: parseInt(maxSupply.toString()),
            mintPrice: parseFloat(ethers.utils.formatEther(mintPrice)),
            purchaseLimit: parseInt(purchaseLimit.toString()),
            ownerAddress: ownerAddress.toString(),
        }

        return nftMintDetail;
    } catch (e) {
        console.log(e);
        return null;
    }
}