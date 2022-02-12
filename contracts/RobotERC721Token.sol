// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RobToken is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    uint256 counter;
    uint256 fee = 0.001 ether;

    struct Rob {
        string name;
        uint256 id;
        uint256 dna;
        uint8 level;
        uint8 rarity;
    }

    Rob[] public robs;

    event NewRob(address indexed owner, uint256 id, uint256 dna);

    // Helpers
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );
        return randomNum % _mod;
    }

    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Creation
    function _createRob(string memory _name) internal {
        uint8 randRarity = uint8(_createRandomNum(100));
        uint256 randDna = _createRandomNum(10**16);
        Rob memory newRob = Rob(_name, counter, randDna, 1, randRarity);
        robs.push(newRob);
        _safeMint(msg.sender, counter);
        emit NewRob(msg.sender, counter, randDna);
        counter++;
    }

    function createRandomRob(string memory _name) public payable {
        require(msg.value >= fee);
        _createRob(_name);
    }

    // Getters
    function getRobs() public view returns (Rob[] memory) {
        return robs;
    }

    function getOwnerRobs(address _owner) public view returns (Rob[] memory) {
        Rob[] memory result = new Rob[](balanceOf(_owner));
        uint256 counter = 0;
        for (uint256 i = 0; i < robs.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter] = robs[i];
                counter++;
            }
        }
        return result;
    }

    // Actions
    function levelUp(uint256 _robId) public {
        require(ownerOf(_robId) == msg.sender);
        Rob storage rob = robs[_robId];
        rob.level++;
    }

    // Let's add more actions here!
}
