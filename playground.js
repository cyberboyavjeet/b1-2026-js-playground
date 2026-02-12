console.log("java script playground ready")

//Traditional function
function add(a,b)
    {
        return a+b
    }
    console.log('add(): ',add(5,6))

    //Modern function
    const addArrow=(a,b)=>a+b
    console.log('addArrow()=', addArrow(10,5))

    //Arrow fuction with single var
    const greeting = name =>"Namaste "+ name
    console.log(greeting('Arti'))

        //Arrow Fuction with multi st
    const greet = (name) => {
        let greeting = 'Welcome to playground.js '
        return greeting + name
        //Always use return if we use {}
    }  
        
        console.log(greet("Avjeet"))

      // 
    const welcome=(name='Guest')=>
        {
            let subject='Modern javaScript'
            let str =`Welcome, ${name} in the playground.js to see the demonstration
            of ${subject}`
            return str

        }
        console.log(welcome('Avjeet'))
        console.log(welcome())//Defult argument

            //Arrow function with array
            const numebers= [1,2,3,4,5,6,7]
            console.log(`Numberss: ${numebers}`)
            console.log(`Numberss: ${numebers[2]}`)

            //double is another list
            //inside map, we can passing arrow function
            //arrow fuction takes an argument (n: elenensts f array), amd perform 
            //doubling operation(n*2)
            const doubled = numebers.map(n=>n*2)
            console.log(`doubled: ${doubled}`)


