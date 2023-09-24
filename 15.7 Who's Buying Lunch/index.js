function whosPaying(names) { 

    const randomPerson = Math.floor(Math.random() * names.length);  

    return names[randomPerson] + " is going to buy lunch today!"; 

} 

alert(whosPaying(["Allan", "Yuki", "Kaze", "Hi", "Tsuchi", "Mizu", "Kaminari"])); 
