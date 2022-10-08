//? Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
//? id
//? nombres
//? apellidos
//? teléfono
//? ubicaciones
//? ciudad
//? dirección
//? Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️

const Numbercontacts = [
    {id:001,nombre:'maria',apellido:'ramos',telefono:78915410,ciudad:'La Paz',dirección:'San Juan De Dios'},
    {id:002,nombre:'cesar',apellido:'gutierrez',telefono:78915420,ciudad:'La Paz',dirección:'San Juan De Dios'},
    {id:003,nombre:'alan',apellido:'rodriguez',telefono:78915430,ciudad:'La Paz',dirección:'San Juan De Dios'},
]

const deleteNumberContact = (list,contact) => {
    const newList = []
    newList.push(list.filter(e => e.nombre !== contact))
    console.log(`Eliminando a ${contact} `,newList.flat())
    return newList
}

const addNumberContact=(list,name_contact,lastName_contact,phone,city,direction)=>
{
    let newContact=[{nombre:name_contact,apellido:lastName_contact,telefono:phone,ciudad:city,dirección:direction}]
    let newList=[newContact,...list]
    console.log(`Añadiendo a ${name_contact} `,newList.flat());
    return newList
}
function ListContacts(list) {
    console.log('Lista General ',list);
    let newListD=[]
    let newListN=[]
    newListD=deleteNumberContact(list,'maria')
    newListN=addNumberContact(newListD,'nataly','ramirez',789154001,'Cochabamba','Los Rosales')
    console.log('Lista actualizada✍ ', newListN.flat());
}
ListContacts(Numbercontacts)
