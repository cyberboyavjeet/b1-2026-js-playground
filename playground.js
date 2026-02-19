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


            //destructuring in j-s
            //Array data Structuring
            const langauages=['javaScript','Python','C++']
            //tp extract the specific elements from an array
            const[first, second]=langauages
            console.log(`first= ${first}, second= ${second}`)


            //destructuring the object in javaScript


            //object in javaScript
            const studends={
                name:'Avjeet',
                course:'CSE',
                year:2026
            }
            console.log(studends)

            //destructuring
            const { name,course}=studends
            console.log(`Name= ${name}, Course= ${course}`)

//Another Example of Dstructuring
const colors=['RED','BLUE','BLACK']
const[c1,c2,c3]=colors
console.log(c1,c2,c3)

//Skipping values 
const marks=[90,80,55]
const[,Scrience]=marks
console.log(Scrience)

//Default value in destruvting
const score=[100]
const [maths,science=0]=score
console.log(maths,science)

//Renaming varriable
const user={
    username:'cyberboyavjeet'

}
const {username:uname}=user
console.log(uname)

//Function parameter destructuring
const printStudent=({sName,sRoll})=>{
    console.log(sName,sRoll)
}
//calling Function
printStudent({sName:'Avjeet', sRoll:07})
