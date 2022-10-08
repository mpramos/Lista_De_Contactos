//! Lista de contactos - 1
//? Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
//? Crea una función para añadir un nuevo contacto a una lista
//? Crea una función para borrar un contacto existente de la lista
//? Crea una función para imprimir en consola los contactos presentes en la lista
//? Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️

const Numbercontacts = [
    {nombre:'maria',apellido:'ramos'},
    {nombre:'cesar',apellido:'gutierrez'},
    {nombre:'alan',apellido:'rodriguez'},
]

const deleteNumberContact = (list,contact) => {
    const newList = []
    newList.push(list.filter(e => e.nombre !== contact))
    console.log(`Eliminando a ${contact} `,newList.flat())
    return newList
}

const addNumberContact=(list,name_contact,lastName_contact)=>
{
    let newContact=[{nombre:name_contact,apellido:lastName_contact}]
    let newList=[newContact,...list]
    console.log(`Añadiendo a ${name_contact} `,newList.flat());
    return newList
}
function ListContacts(list) {
    console.log('Lista General ',list);
    let newListD=[]
    let newListN=[]
    newListD=deleteNumberContact(list,'maria')
    newListN=addNumberContact(newListD,'nataly','ramirez')
    console.log('Lista actualizada✍ ', newListN.flat());
}
ListContacts(Numbercontacts)
