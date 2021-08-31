
let object = { 
  i: 30,
  f: () => console.log(this.i, this),
  g: function() {
    console.log(this.i, this);
  }
}

object.f();
object.g(); 
 
// 

function Person(firstName, hobbies)
{
    this.firstName= firstName
    this.hobbies=hobbies

    this.listhobbies=function()
    {
        return this.hobbies.map(((hobby , index) => {
            console.log(this.firstName+ 'likes' + this.hobby )
        }))
    }
}
let person = new Person('fahad',
            ['coding','travelling','playing'])

     person.listhobbies() 