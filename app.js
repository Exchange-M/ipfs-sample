const IPFS = require('ipfs-api');
const fs = require('fs');
const ipfs = new IPFS({ 
	host: 'ipfs.infura.io', 
    port: 5001,
	protocol: 'https' 
});


const file = fs.readFileSync('./test.txt');
const fileBuffer = new Buffer(file);

ipfs.files.add(fileBuffer, (err, f) => {
	/*
	 * sample data
	 [
  		{
    		path: 'QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o',
    		hash: 'QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o',
    		size: 20
  		}	
	]
	 */
	console.log(err);
	console.log(f);
	
	console.log(err);
	console.log(f);
	
	ipfs.files.get(f[0].hash, (err, ff) => {
		/*
		 * sample data
		 [
  			{
    			path: 'QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o',
    			content: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 0a>
  		 	}
		 ]
	 	*/
		console.log(err);
		console.log(ff[0].content.toString());
	})
})

