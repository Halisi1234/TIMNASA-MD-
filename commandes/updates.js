"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "channel1", reaction: "👾⭐💥", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃TIMNASA-MD ┃⬡ WhatsApp channel\n\n';
    let d = 'https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/ufgvu9.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃Cod3Uchiha┃⬡ WhatsApp Channel\n\n';
    let d = 'https://whatsapp.com/channel/0029VarwsIB8F2pG9QWm3n1Z';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/ufgvu9.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
`/*module.exports.commande = (love) => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */
