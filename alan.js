const yaricap = process.argv.slice(2)[0]*1
function DaireAlaniHesapla() {
    const daireAlani = Math.PI * Math.pow(yaricap,2)
    console.log(`Yarıçapı (${yaricap}) olan dairenin alanı: (${daireAlani})'dir.`)
}
DaireAlaniHesapla()
