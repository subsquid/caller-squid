

export const processorConfig = {
  chainName: 'bifrost',
  prefix: 'bifrost',
  dataSource: {
    archive: 'bifrost.archive.subsquid.io/graphql',
    chain: 'wss://kusama-rpc.polkadot.io'
  },
  typesBundle: 'bifrost',
  blockRange: {
    from: 100000
  }
};
