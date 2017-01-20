var proposalNames = ["leftist", "rightwing"] ;


var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"proposal","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"bytes32"},{"name":"voteCount","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"},{"name":"delegate","type":"address"},{"name":"vote","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winnerName","outputs":[{"name":"winnerName","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"proposalNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]);
var ballot = ballotContract.new(
   proposalNames,
      {
           from: web3.eth.accounts[0], 
	        data: '0x60606040523461000057604051610ad4380380610ad4833981016040528080518201919050505b600033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160016000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600090505b81518110156101ae576002805480600101828181548183558181151161013b5760020281600202836000526020600020918201910161013a91905b808211156101365760006000820160009055600182016000905550600201610113565b5090565b5b505050916000526020600020906002020160005b6040604051908101604052808686815181101561000057906020019060200201516000191681526020016000815250909190915060008201518160000190600019169055602082015181600101555050505b80806001019150506100d8565b5b50505b610913806101c16000396000f3006060604052361561008c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f14610091578063013cf08b146100ae5780632e4176cf146100ee5780635c19a95c1461013d578063609ff1bd146101705780639e7b8d6114610193578063a3ec138d146101c6578063e2ba53f014610252575b610000565b34610000576100ac600480803590602001909190505061027d565b005b34610000576100c9600480803590602001909190505061033a565b6040518083600019166000191681526020018281526020019250505060405180910390f35b34610000576100fb61036b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b346100005761016e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610391565b005b346100005761017d6106d9565b6040518082815260200191505060405180910390f35b34610000576101c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061075a565b005b34610000576101f7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610859565b60405180858152602001841515151581526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390f35b346100005761025f6108b6565b60405180826000191660001916815260200191505060405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156102dc57610000565b60018160010160006101000a81548160ff0219169083151502179055508181600201819055508060000154600283815481101561000057906000526020600020906002020160005b50600101600082825401925050819055505b5050565b600281815481101561000057906000526020600020906002020160005b915090508060000154908060010154905082565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091508160010160009054906101000a900460ff16156103f257610000565b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561052057503373ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561058f57600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692506103f3565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105c857610000565b60018260010160006101000a81548160ff021916908315150217905550828260010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156106bc57816000015460028260020154815481101561000057906000526020600020906002020160005b50600101600082825401925050819055506106d3565b816000015481600001600082825401925050819055505b5b505050565b60006000600060009150600090505b6002805490508110156107545781600282815481101561000057906000526020600020906002020160005b5060010154111561074657600281815481101561000057906000526020600020906002020160005b506001015491508092505b5b80806001019150506106e8565b5b505090565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806108035750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b1561080d57610000565b6001600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b50565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b600060026108c26106d9565b815481101561000057906000526020600020906002020160005b506000015490505b905600a165627a7a72305820d04bb5bd843727bab4f840d9756ade54b24e742689472b64c3a54203e01c02730029', 
		     gas: '4700000'
		        }, function (e, contract){
			    console.log(e, contract);
			        if (typeof contract.address !== 'undefined') {
				         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
					     }
					      })