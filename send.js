// transfer Native Balance 

const {ethers} = require('ethers')

const node = 'https://autumn-prettiest-road.ethereum-sepolia.quiknode.pro/a8cb23785e03849da17f1e48a24b1582ed2a9c10/'
const provider = new ethers.providers.JsonRpcProvider(node)

const privatekey = 'b863aa344a3f0dcd437a007692ace6f091a3eecb7aa594a64ac9512819710455'
const wallet = new ethers.Wallet(privatekey, provider)

const receiver= '0x259B2BdaD6228bdC5Eb48c7A8c244f5F798113Dd'
const sender = '0x260A5568d2002B8F601Fe1001BD2D93A212F087b'

const amountToSend = '0.00045'

const tx ={
    to: receiver,
    value: ethers.utils.parseEther(amountToSend)
}

async function main(){
    try {
        const balance = await provider.getBalance(sender)
        console.log(ethers.utils.formatEther(balance))
    
        wallet.sendTransaction(tx)
            .then((txObj) => {
                console.log('txHash', txObj.hash)
        })
    } catch (error) {
        console.log("error : ",error)
    }

}
main()