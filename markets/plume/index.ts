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
export const rateStrategyNest: IInterestRateStrategyParams = {
  name: "rateStrategyVolatileTwo",
  optimalUsageRatio: parseUnits("0.5", 27).toString(),
  baseVariableBorrowRate: parseUnits("0", 27).toString(),
  variableRateSlope1: parseUnits("0.06", 27).toString(),
  variableRateSlope2: parseUnits("3.04", 27).toString(),
  stableRateSlope1: parseUnits("0.05", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.01", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
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

export const strategyNest: IReserveParams = {
  strategy: rateStrategyNest,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "8000",
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
    NRWA: strategyNest,
    // NTBILL: strategyNest,
    // NELIXIR: strategyNest,
    // WPLUME: strategyWETH,
    WETH: strategyWETH,
    PETH: strategyWETH,
    USDC: strategyPUSD,
    USDT: strategyPUSD,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyNest,
  },
  ReserveAssets: {
    [ePlumeNetwork.plume]: {
      // PUSD: "0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F", // usdbc
      NRWA: "0x593cCcA4c4bf58b7526a4C164cEEf4003C6388db",
      // NTBILL: "0xe72fe64840f4ef80e3ec73a1c749491b5c938cb9",
      // NELIXIR: "0x9fbC367B9Bb966a2A537989817A088AFCaFFDC4c",
      WETH: "0xca59cA09E5602fAe8B629DeE83FfA819741f14be",
      PETH: "0x39d1F90eF89C52dDA276194E9a832b484ee45574",
      USDC: "0x78adD880A697070c1e765Ac44D65323a0DcCE913",
      USDT: "0xda6087E69C51E7D31b6DBAD276a3c44703DFdCAd",
    },
    // [ePlumeNetwork.plumeTestnet]: {
    //   // USDT: "0x2413b8C79Ce60045882559f63d308aE3DFE0903d",
    //   USDC: "0x401eCb1D350407f13ba348573E5630B83638E30D",
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
      NRWA: "0xd411131B1Efc61006fc249D67C7BDD61fcd368F4",
      // NTBILL: "0x69b8Fcb74a5FbcCddE7bDb9b7Ec59a8Cb1AA5e2C",
      // NELIXIR: "0x42D4bf80e77114eBB049CBea29E1AB5A0727e9CA",
      WETH: "0x8De37B451C353AA6EEAc39dc28B6Ee82554BBa55",
      PETH: "0x8aC34D137daac9F47a5F9a93C429F0c7324c70da",
      USDC: "0x0D9154F5453dCb0a271D9FF415Abc085d7B03b6c",
      USDT: "0x0D9154F5453dCb0a271D9FF415Abc085d7B03b6c",
    },
    // [ePlumeNetwork.plumeTestnet]: {
    //   // USDC: "0x76E2882488Bb9992B81e22A292902b659F14da9c",
    //   USDT: "0x76E2882488Bb9992B81e22A292902b659F14da9c",
    // },
  },

  ReserveFactorTreasuryAddress: {
    [ePlumeNetwork.plume]: ZERO_ADDRESS,
    // [ePlumeNetwork.plumeTestnet]: ZERO_ADDRESS,
  },
  FallbackOracle: {
    [ePlumeNetwork.plume]: ZERO_ADDRESS,
    // [ePlumeNetwork.plumeTestnet]: ZERO_ADDRESS,
  },
  IncentivesConfig: {
    enabled: {
      [ePlumeNetwork.plume]: true,
      // [ePlumeNetwork.plumeTestnet]: true,
    },
    rewards: {
      // [ePlumeNetwork.plumeTestnet]: {
      //   // PUSD: ZERO_ADDRESS,
      //   USDT: ZERO_ADDRESS,
      // },
      [ePlumeNetwork.plume]: {
        NRWA: ZERO_ADDRESS,
        // NTBILL: ZERO_ADDRESS,
        // NELIXIR: ZERO_ADDRESS,
        WETH: ZERO_ADDRESS,
        USDT: ZERO_ADDRESS,
        USDC: ZERO_ADDRESS,
        PETH: ZERO_ADDRESS,
      },
    },
    rewardsOracle: {
      // [ePlumeNetwork.plumeTestnet]: {
      //   // PUSD: ZERO_ADDRESS,
      //   USDT: ZERO_ADDRESS,
      // },
      [ePlumeNetwork.plume]: {
        NRWA: ZERO_ADDRESS,
        // NTBILL: ZERO_ADDRESS,
        // NELIXIR: ZERO_ADDRESS,
        WETH: ZERO_ADDRESS,
        USDT: ZERO_ADDRESS,
        USDC: ZERO_ADDRESS,
        PETH: ZERO_ADDRESS,
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
