'use client'

import { useState } from 'react'

interface SampleSelectorProps {
  onSelect: (code: string) => void
}

const SAMPLES = {
  'simple-erc20': {
    name: 'Simple ERC-20',
    code: `pragma solidity ^0.8.0;

contract SimpleToken {
    string public name = "Simple Token";
    string public symbol = "SIM";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
    }
    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}`,
  },
  'vulnerable-token': {
    name: 'Vulnerable Token (Reentrancy)',
    code: `pragma solidity ^0.8.0;

contract VulnerableToken {
    mapping(address => uint256) public balances;
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    // VULNERABLE: Reentrancy attack possible
    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount);
        
        // External call BEFORE state update
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success);
        
        // State update AFTER external call (WRONG!)
        balances[msg.sender] -= _amount;
    }
    
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}`,
  },
  'ownable-contract': {
    name: 'Ownable Contract (Centralization)',
    code: `pragma solidity ^0.8.0;

contract OwnableToken {
    address public owner;
    bool public paused;
    mapping(address => uint256) public balances;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    // CENTRALIZATION RISK: Owner can mint unlimited tokens
    function mint(address _to, uint256 _amount) public onlyOwner {
        balances[_to] += _amount;
    }
    
    // CENTRALIZATION RISK: Owner can pause all transfers
    function pause() public onlyOwner {
        paused = true;
    }
    
    function unpause() public onlyOwner {
        paused = false;
    }
    
    function transfer(address _to, uint256 _amount) public whenNotPaused {
        require(balances[msg.sender] >= _amount);
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}`,
  },
}

export default function SampleSelector({ onSelect }: SampleSelectorProps) {
  const [selected, setSelected] = useState('')

  const handleSelect = (key: string) => {
    setSelected(key)
    onSelect(SAMPLES[key as keyof typeof SAMPLES].code)
  }

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Or try a sample contract:
      </label>
      <select
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
      >
        <option value="">Select a sample...</option>
        {Object.entries(SAMPLES).map(([key, sample]) => (
          <option key={key} value={key}>
            {sample.name}
          </option>
        ))}
      </select>
    </div>
  )
}
