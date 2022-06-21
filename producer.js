// this is a basic kafka producer
//  it's successfully sending messages to the topics

const { Kafka } = require("kafkajs");



// const { Partitioners } = require('kafkajs')
async function produce() {
    const kafka = new Kafka({
        clientId: "sam",
        brokers: ["127.0.0.1:9092"],
    });

    
   // const jerseyNumber = process.argv[2];

   const producer = kafka.producer();
   await producer.connect();
   console.log("Producer connected");

   await producer.send({
     topic: 'samirrrr',
     messages: [
       { value: 'hello world',
        partition:  0,
            },
     ],
   })
   
   await producer.disconnect()
  
   
}

produce();
