/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AnyswapCreate2Deployer1Interface extends ethers.utils.Interface {
  functions: {
    "deploy(bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deploy",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;

  events: {
    "Deployed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export class AnyswapCreate2Deployer1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AnyswapCreate2Deployer1Interface;

  functions: {
    deploy(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(bytes,uint256)"(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deploy(
    code: BytesLike,
    salt: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(bytes,uint256)"(
    code: BytesLike,
    salt: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deploy(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deploy(bytes,uint256)"(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deployed(addr: null, salt: null): EventFilter;
  };

  estimateGas: {
    deploy(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(bytes,uint256)"(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(bytes,uint256)"(
      code: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
