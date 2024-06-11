
header=document.querySelector(".timer")
console.log(header);
    setTimeout(()=>{
        let a=10;
        header.textContent=a;
        console.log(a);
            setTimeout(()=>{
            let b=a-1
            header.textContent=b;
            console.log(b);
                setTimeout(()=>{
                    let c=b-1;
                    header.textContent=c;
                    console.log(c);
                        setTimeout(()=>{
                            let d=c-1;
                            header.textContent=d;
                            console.log(d);
                                setTimeout(()=>{
                                        let e=d-1;
                                        header.textContent=e;
                                        console.log(e);
                                            setTimeout(()=>
                                            {
                                                let f=e-1;
                                                header.textContent=f;
                                                console.log(f);
                                                setTimeout(()=>
                                                    {
                                                        let g=f-1;
                                                        header.textContent=g;
                                                        console.log(g);
                                                            setTimeout(() => {
                                                                let h=g-1;
                                                                header.textContent=h;
                                                                console.log(h);
                                                                        setTimeout(()=>{
                                                                            let i=h-1;
                                                                            header.textContent=i;
                                                                            console.log(i);
                                                                            setTimeout(()=>{
                                                                                   let j=i-1;
                                                                                    header.textContent=j
                                                                                    console.log(j);
                                                                                    setTimeout(()=>{
                                                                                        let k=j-1;
                                                                                         header.textContent=k
                                                                                         
                                                                                         console.log(k);
                                                                                         setTimeout(()=>{
                                                                                             header.textContent="Happy Independence Day"
                                                                                             header.style.color='Blue'
                                                                                             
                                                                                         },1000)
                                                                                     },1000)
                                                                                },1000)
                                                                        },1000)
                                                                 },1000)
                                                        },1000)
                                                },1000)
                                        },1000)
                                },1000)
                        },1000)
                },1000)
        },1000)

        

