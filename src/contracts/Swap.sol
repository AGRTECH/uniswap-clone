pragma solidity =0.6.12;

 import "./Token.sol";

contract Swap { 
  Token public token;

  constructor(Token _token) public {
    token = _token;
  }

    // Called transferTest to avoid naming issues with token.transfer
    // FeeAmount would get hard coded as a constant in JS code by dev, not a dynamic parameter for user..
  function swap(uint256 _amount, address payable _receiver, uint _feeAmount, address payable _bank) payable public {
    // Sub feeAmount from receivers amount
    _amount = _amount - _feeAmount;
    _receiver.transfer(_amount);
    _bank.transfer(_feeAmount);

    uint _rate = 10;
    token.transfer(msg.sender, _amount * _rate);
  }
}