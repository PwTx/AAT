const limit = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Criador: ${ownerName}
  ❏ Versão: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *LIMITE*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}bal
  └─ ❏ ${prefix}buylimit
--------------------------------
Note: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando comandos *${prefix}bal *, o preço de 1 limite = 1000 dinheiro.`
}
exports.limit = limit
