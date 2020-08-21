                   
let to = "08/20/2020 10:12:21"
let ti = "08/20/2020 12:00:00"
let selisihWaktu
 
function jarak(waktuAwal, waktuAkhir){
    // get selisih waktu (dalam second)
    var waktuo = new Date(waktuAwal).getTime()
    var waktui = new Date(waktuAkhir).getTime()
    selisihWaktu = (waktui - waktuo)/1000

    let s = 0 
    let recentTime = 0 
    let V = 6
    
    for(let i = 0; i<=selisihWaktu; i++){    
        // setelah 5 menit, V bertambah menjadi 8m/s        
        if(i === 300){
            recentTime = i
            V = V + 2
        }

        // kecepatan bertambah 1m/s tiap 10menit
        else if(i === recentTime + 600){
            recentTime = i
            V = V + 1            
        }
    }
    s += V * recentTime
    console.log("s = " + s + " m = " + s/1000 + " km")
}
jarakTempuh = jarak(to, ti)
console.log(jarakTempuh)