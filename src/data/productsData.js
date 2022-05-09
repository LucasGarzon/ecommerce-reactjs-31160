export const productsMasks = [
    {
        id: 1,
        nombre: "Deku Mask",
        precio: 150,
        imagen: "https://www.zeldadungeon.net/wiki/images/thumb/c/c1/Deku-Mask.png/156px-Deku-Mask.png",
        stock: 35,
        info: "Link is transformed into Deku Link after he lands in Termina. By retrieving the Ocarina of Time from Skull Kid and speaking with the Happy Mask Salesman, he learns the Song of Healing and transforms the curse into the Deku Mask, allowing him to transform back and forth at will. It is implied to contain the soul of the Deku Butler's Son. Wear it to assume Deku Link form. This allows Link to interact with other Deku Scrubs, stun enemies, hop on water, use flowers to fly and well as shoot bubbles. Deku Link is weak to fire, and while he can hop across water for 5 skips, after that he will drown."
    },
    {
        id: 2,
        nombre: "Goron Mask",
        precio: 320,
        imagen: "https://www.zeldadungeon.net/wiki/images/thumb/1/13/Goron-Mask.png/216px-Goron-Mask.png",
        stock: 18,
        info: "To get the Goron Mask, Link must play the Song of Healing for the spirit of Darmani at his grave in the Goron Graveyard. Wear it to assume Goron Link form. This allows Link to pretend to be Darmani to other Gorons, move heavy objects, roll at speed, Goron Pound, walk on lava and punch with fists of fire."
    },
    {
        id: 3,
        nombre: "Zora Mask",
        precio: 320,
        imagen: "https://www.zeldadungeon.net/wiki/images/thumb/1/19/Zora-Mask.png/230px-Zora-Mask.png",
        stock: 16,
        info: "To get the Zora Mask, Link must play the Song of Healing to heal the spirit of Mikau, the Indigo-Go's guitarist. Wear it to assume Zora Link form. This allows Link to pretend to be Mikau to other Zoras, swim quickly, fight underwater and use the boomerang-like fins for combat."
    },
    {
        id: 4,
        nombre: "Fierce Deity's Mask",
        precio: 790,
        imagen: "https://www.zeldadungeon.net/wiki/images/thumb/2/25/Fierce-Deitys-Mask.png/203px-Fierce-Deitys-Mask.png",
        stock: 4,
        info: "To get the Fierce Deity's Mask, Link must complete the trials Inside the Moon and give all 20 normal masks to the Moon Children. The last child, wearing Majora's Mask, will give Link this mask because he has no non-transformation masks left. Wear it to assume Fierce Deity Link form, but only in Boss rooms. This transforms Link into an adult form, armed with the powerful, two-handed Fierce Deity Sword which can deal multiple times the damage of the base Kokiri Sword, and shoot Sword Beams when Z-Targeting."
    },
    {
        id: 5,
        nombre: "Great Fairy's Mask",
        precio: 25,
        imagen: "https://www.zeldadungeon.net/wiki/images/thumb/8/8b/Great-Fairys-Mask.png/142px-Great-Fairys-Mask.png",
        stock: 50,
        info: "The Great Fairy's Mask is required to collect all the Stray Fairies in the various Temples. This mask will float and shimmer when there is a Stray Fairy in the room, and make those Stray Fairies fly towards Link unless they are trapped. To get it, grab the Stray Fairy at either the Laundry Pool (day) or East Clock Town (night) and bring it to the Great Fairy Fountain in North Clock Town in Link's normal, Hylian, form."
    }
]

const task = new Promise((resp) => {
	resp(productsMasks)
}, 2000)

export const getItem = () => {
	return task
}