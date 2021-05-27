case 'stickmeme':
									
									 var ghs = body.slice(11)
									 if (ben.message.extendedTextMessage != undefined || ben.message.extendedTextMessage != null) {
                                          ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                     var imgbb = require('imgbb-uploader')
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBuffer(`https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${ghs}`)
										benny.sendMessage(from, buffer, sticker)
									 }
									break
