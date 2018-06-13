import axios from 'axios';

export const sortContacts = (sorting, contacts) => {

    const aToZFirstName = '1'
    const aToZLastName = '2'
    
    if(sorting === aToZFirstName){
        const sortedContacts = contacts
        return sortedContacts.sort((a, b) => {
            if(a.first_name > b.first_name){
                return 1
            }if(a.first_name < b.first_name){
                return -1
            }
        })
    }else if(sorting === aToZLastName){
        const sortedContacts = contacts
        return sortedContacts.sort((a, b) => {
            if(a.last_name > b.last_name){
                return 1
            }if(a.last_name < b.last_name){
                return -1
            }
        })
    }
}

export const fetchAll = (This) => {
    axios.get('/contacts/')
    .then((res) => {
        This.setState({ contacts: res.data })
        This.setState({ visible: This.state.contacts })
    })
    .catch((err) => {
        console.log(err);
    });
}

export const search = (searchTerm, contacts) => {
    searchTerm = searchTerm.toLowerCase()

    let arr = contacts
    arr = arr.filter((contact) => {
        const firstName = contact.first_name.toLowerCase().trim()
        const lastName = contact.last_name.toLowerCase().trim()
        if(firstName.includes(searchTerm) || lastName.includes(searchTerm)){
            return true
        }else{
            return false
        }
    })

    return arr
}