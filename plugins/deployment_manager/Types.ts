import { Contract } from 'ethers';

export type Address = string;

export interface ContractMetadata {
  address: Address,
  name: string,
  abi: string,
  bin: string,
  metadata: string
};

export interface BuildFile {
  contracts: {[fileContractName: string]: ContractMetadata}
  version: string
}

export type ContractMap = { [name: string]: Contract };

export type BuildMap = Map<Address, BuildFile>;