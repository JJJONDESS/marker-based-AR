// ============================================================
//  THIS IS THE ONLY FILE YOU EDIT WHEN YOU ADD A NEW DISH
//  Paths must match your GitHub file names EXACTLY (capital letters count!)
// ============================================================

const RESTAURANT = {
  name: 'My Restaurant',       // shown in the browser tab title
  phone: '03160843627',        // "Call waiter" button
  whatsapp: '923160843627'     // WhatsApp needs country code, no "+" and no leading 0 (Pakistan = 92)
};

const DISHES = {

  'veg-pizza': {                              // <- this name goes in the QR link: ?item=veg-pizza
    name: 'Veg Pizza',
    price: '',                                // e.g. 'Rs 1450'  (leave '' to hide)
    description: '',                          // e.g. 'Fresh vegetables on a hand-stretched base'
    ingredients: '',                          // e.g. 'Mushroom, capsicum, olives, onion, mozzarella'
    allergens: '',                            // fill in only what is true!
    glb: 'dishes/VegPizza.glb',               // 3D model (file inside the "dishes" folder)
    mind: 'dishes/VegPizza-targets.mind'      // compiled marker image (file inside the "dishes" folder)
  },

  'pizza': {                                  // your first pizza -> link: ?item=pizza
    name: 'Pizza',
    price: '',
    description: '',
    ingredients: '',
    allergens: '',
    glb: 'dishes/pizza.glb',
    mind: 'dishes/pizza-target.mind'
  }

  // ---- NEXT DISH: add a comma after the last "}" above, then copy one block and paste it here ----

};
