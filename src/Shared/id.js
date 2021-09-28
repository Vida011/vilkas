function getId() { //kai ja pakviesim-israsis unikalu skaiciuka;
        let id = localStorage.getItem('ids');
        if (null === id) {
            id = 0;
        }
        id++;
        localStorage.setItem('ids', id)
        return id;

}

export default persongetId;