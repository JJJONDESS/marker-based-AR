// ============================================================
//  THIS IS THE ONLY FILE YOU EDIT WHEN YOU ADD A NEW DISH
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
    description: '',                          // e.g. 'Fresh vegetables on a hand-stretched base'  (leave '' to hide)
    ingredients: '',                          // e.g. 'Mushroom, capsicum, olives, onion, mozzarella'
    allergens: '',                            // e.g. 'Gluten, dairy'  (fill in only what is true!)
    glb: 'dishes/veg-pizza/model.glb',        // the 3D model
    mind: 'dishes/veg-pizza/target.mind'      // the compiled marker image
    // Optional tuning if the model looks wrong on the menu photo:
    // scale: '0.5 0.5 0.5', rotation: '90 0 0', position: '0 0 0.02'
  }

  // ---- COPY THE BLOCK ABOVE, ADD A COMMA AFTER THE PREVIOUS "}", AND PASTE IT HERE FOR THE NEXT DISH ----

};
