const targets=document.querySelectorAll('.target')

    const options={
        threshold: 0.3 //1 
    }

    const callBack=((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
            else{
                entry.target.classList.remove('active');
            }
        })
    })

const observer=new IntersectionObserver(callBack, options);

targets.forEach((target)=>{
    observer.observe(target);
})
/* 
1 - seklin ve ya divin 30%-den az hissesi gorunmese isleyecek.
 */