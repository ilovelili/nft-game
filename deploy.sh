#!/usr/bin/env bash
network=$1

echo "Network: $network"

truffle migrate --reset --network $network

# Verify Contracts on Etherscan
truffle run verify RobToken --network $network --license SPDX-License-Identifier

# Flatten Contracts
./node_modules/.bin/truffle-flattener contracts/RobToken.sol > flats/RobToken_flat.sol