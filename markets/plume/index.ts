import {
  eBaseNetwork,
  eContractid,
  ePlumeNetwork,
  IAaveConfiguration,
  IInterestRateStrategyParams,
  IReserveParams,
} from "./../../helpers/types";
import AaveMarket from "../aave";
import { ZERO_ADDRESS } from "../../helpers";
import { parseUnits } from "@ethersproject/units";

export const rateStrategyVolatileOne: IInterestRateStrategyParams = {
  name: "rateStrategyVolatileOne",
  optimalUsageRatio: parseUnits("0.785", 27).toString(),
  baseVariableBorrowRate: parseUnits("0", 27).toString(),
  variableRateSlope1: parseUnits("0.07", 27).toString(),
  variableRateSlope2: parseUnits("3.04", 27).toString(),
  stableRateSlope1: parseUnits("0.05", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};

export const rateStrategyStableOne: IInterestRateStrategyParams = {
  name: "rateStrategyStableOne",
  optimalUsageRatio: parseUnits("0.8", 27).toString(),
  baseVariableBorrowRate: parseUnits("0.01", 27).toString(),
  variableRateSlope1: parseUnits("0.117", 27).toString(),
  variableRateSlope2: parseUnits("0.5", 27).toString(),
  stableRateSlope1: parseUnits("0.1", 27).toString(),
  stableRateSlope2: parseUnits("0.5", 27).toString(),
  baseStableRateOffset: parseUnits("0.01", 27).toString(),
  stableRateExcessOffset: parseUnits("0.08", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};

export const strategyPUSD: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "8000",
  liquidationThreshold: "8300",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: true,
};

// export const strategyUSDC: IReserveParams = {
//   strategy: rateStrategyStableOne,
//   baseLTVAsCollateral: "8000",
//   liquidationThreshold: "8500",
//   liquidationBonus: "10500",
//   liquidationProtocolFee: "1000",
//   borrowingEnabled: true,
//   stableBorrowRateEnabled: true,
//   flashLoanEnabled: true,
//   reserveDecimals: "6",
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: "1000",
//   supplyCap: "2000000000",
//   borrowCap: "0",
//   debtCeiling: "0",
//   borrowableIsolation: true,
// };

// export const strategyAAVE: IReserveParams = {
//   strategy: rateStrategyVolatileOne,
//   baseLTVAsCollateral: "5000",
//   liquidationThreshold: "6500",
//   liquidationBonus: "11000",
//   liquidationProtocolFee: "1000",
//   borrowingEnabled: false,
//   stableBorrowRateEnabled: false,
//   flashLoanEnabled: true,
//   reserveDecimals: "18",
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: "0",
//   supplyCap: "0",
//   borrowCap: "0",
//   debtCeiling: "0",
//   borrowableIsolation: false,
// };

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7850",
  liquidationThreshold: "8100",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const PlumeConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Mystic Market",
  ATokenNamePrefix: "Mystic",
  StableDebtTokenNamePrefix: "Mystic",
  VariableDebtTokenNamePrefix: "Mystic",
  SymbolPrefix: "my",
  ProviderId: 8080,
  ReservesConfig: {
    PUSD: strategyPUSD,
    WPLUME: strategyWETH,
    // WETH: strategyWETH,
  },
  RateStrategies: { rateStrategyVolatileOne, rateStrategyStableOne },
  ReserveAssets: {
    [ePlumeNetwork.plume]: {
      PUSD: "0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F", // usdbc
      WPLUME: "0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1",
    },
    // [ePlumeNetwork.plumeTestnet]: {
    //   PUSD: "0xe644F07B1316f28a7F134998e021eA9f7135F351",
    //   WETH: "0x22d6672f7282F67Ce20d8Dafe30C6f012a219558",
    // },
  },
  EModes: {
    // StableEMode: {
    //   id: "1",
    //   ltv: "9700",
    //   liquidationThreshold: "9750",
    //   liquidationBonus: "10100",
    //   label: "Stablecoins",
    //   assets: ["PUSD"], //["USDC", "USDT", "DAI", "PUSD", "USDC.e"],
    // },
  },
  ChainlinkAggregator: {
    [ePlumeNetwork.plume]: {
      PUSD: "0x0D9154F5453dCb0a271D9FF415Abc085d7B03b6c",
      WPLUME: "0xBDCF5dcd60F967C2f8c79AFD1CE7C9F1A11f9f04",
    },
    // [ePlumeNetwork.plumeTestnet]: {
    //   PUSD: "0x76E2882488Bb9992B81e22A292902b659F14da9c",
    //   WETH: "0x76E2882488Bb9992B81e22A292902b659F14da9c",
    // },
  },

  ReserveFactorTreasuryAddress: {
    // [ePlumeNetwork.plume]: ZERO_ADDRESS,
    // [ePlumeNetwork.plumeTestnet]: ZERO_ADDRESS,
  },
  FallbackOracle: {
    [ePlumeNetwork.plume]: ZERO_ADDRESS,
    [ePlumeNetwork.plumeTestnet]: ZERO_ADDRESS,
  },
  IncentivesConfig: {
    enabled: {
      [ePlumeNetwork.plume]: true,
      [ePlumeNetwork.plumeTestnet]: true,
    },
    rewards: {
      [ePlumeNetwork.plumeTestnet]: {
        PUSD: ZERO_ADDRESS,
        WETH: ZERO_ADDRESS,
      },
      [ePlumeNetwork.plume]: {
        PUSD: ZERO_ADDRESS,
        WPLUME: ZERO_ADDRESS,
      },
    },
    rewardsOracle: {
      [ePlumeNetwork.plumeTestnet]: {
        PUSD: ZERO_ADDRESS,
        WPLUME: ZERO_ADDRESS,
      },
      [ePlumeNetwork.plume]: {
        PUSD: ZERO_ADDRESS,
        WPLUME: ZERO_ADDRESS,
      },
    },
    incentivesInput: {
      // [eArbitrumNetwork.arbitrumTestnet]: [
      //   {
      //     emissionPerSecond: "34629756533",
      //     duration: 7890000,
      //     asset: "DAI",
      //     assetType: AssetType.AToken,
      //     reward: "CRV",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      //   {
      //     emissionPerSecond: "300801036720127500",
      //     duration: 7890000,
      //     asset: "USDC",
      //     assetType: AssetType.AToken,
      //     reward: "REW",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      //   {
      //     emissionPerSecond: "300801036720127500",
      //     duration: 7890000,
      //     asset: "LINK",
      //     assetType: AssetType.AToken,
      //     reward: "REW",
      //     rewardOracle: "0",
      //     transferStrategy: TransferStrategy.PullRewardsStrategy,
      //     transferStrategyParams: "0",
      //   },
      // ],
    },
  },

  L2PoolEnabled: {
    [ePlumeNetwork.plume]: true,
    [ePlumeNetwork.plumeTestnet]: true,
  },
  ParaswapRegistry: {},
  FlashLoanPremiums: {
    total: 0.0005e4,
    protocol: 0.0004e4,
  },
};

export default PlumeConfig;
