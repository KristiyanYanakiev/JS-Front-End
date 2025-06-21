function colorize() {
    const evenRows = document.querySelectorAll("table tbody tr:nth-child(odd)")
    
    evenRows.forEach(element => {
        element.style.backgroundColor = 'teal'
    });
    
}

