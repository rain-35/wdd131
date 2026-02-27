const character = {
    name: "Shnorakalutsune",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "character_card.png",

    attacked() {
        this.health -= 20;
        if (this.health < 0) {
            this.health = 0;
        }    
        this.updateCard();   
    },

    checkHealth() {
        if (this.health <= 0) {
            alert(`${this.name} has been defeated!`);
            this.image = "character_card_dead.png";
            this.updateCard();
        } 

    },

    levelUp() {
        this.level += 1;
        this.updateCard();

    },

    updateCard() {
        document.getElementById("charName").textContent = this.name;
        document.getElementById("charClass").textContent = this.class;
        document.getElementById("charLevel").textContent = `Level: ${this.level}`;
        document.getElementById("charHealth").textContent = `Health: ${this.health}`;
        document.getElementById("charImage").src = this.image;
    }
}

document.getElementById("attackBtn").addEventListener("click", () => {
    if (character.health <= 0) {
        alert(`you can't attack, your character is dead!`);
        return;
    }else{
        character.attacked();
        character.checkHealth();
    }



});

document.getElementById("levelBtn").addEventListener("click", () => {
    if (character.health <= 0) {
        alert(`you can't level up, your character is dead!`);
        return;
    }else{
        character.levelUp();
    }   
});

character.updateCard();