pragma solidity =0.6.12;

 
contract Swap { 
  constructor() payable public {
  }

    // Called transferTest to avoid naming issues with token.transfer
    // FeeAmount would get hard coded as a constant in JS code by dev, not a dynamic parameter for user..
  function transfer(uint256 _amount, address payable _receiver, uint _feeAmount, address payable _bank) payable public {
    // Sub feeAmount from receivers amount
    _amount = _amount - _feeAmount;
    _receiver.transfer(_amount);
    _bank.transfer(_feeAmount);
  }
}