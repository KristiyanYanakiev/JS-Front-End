function colorize() {
    const evenRows = document.querySelectorAll("table tbody tr:nth-child(even)")
    
    evenRows.forEach(element => {
        element.style.backgroundColor = 'teal'
    });
    
}

