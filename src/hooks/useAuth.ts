import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injectedConnector, networkConnector } from "../utils/connectors"
import { toast } from 'react-hot-toast'
import { currentNetwork } from 'utils'

let connector = null;
connector = networkConnector;

const useAuth = () => {
  const { library, chainId, activate, deactivate } = useWeb3React()

  const login = useCallback(async (walletId = 0) => {
    if (chainId === parseInt(currentNetwork)) {
      connector = injectedConnector;
    } else {
      connector = networkConnector;
    }

    await activate(connector);
    if (library && chainId != parseInt(currentNetwork)) {
      toast.error("Unsupported Network. This platform is working on Ethereum Network");
      if (connector !== networkConnector) {
        connector = networkConnector;
        await activate(connector);
      }
    }
  }, [activate, library, chainId])

  const logout = useCallback(() => {
    deactivate()
  }, [deactivate])

  return { login, logout }
}

export default useAuth
