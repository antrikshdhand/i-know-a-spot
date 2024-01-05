export const locations = [
    {
        id: generateRandomId(),
        name: 'Glenfield Station concourse',
        latLong: '-33.971983653955334, 150.8929315813365',
        type: 'sunset',
        description: 'Head towards the Roy Watts Rd station exit and you will be graced by a beautiful view of the sunset.',
        img: 'https://i.pinimg.com/736x/c8/d6/bc/c8d6bc6ad3b08172bdbc1665f3ed080b.jpg'
    },
    {
        id: generateRandomId(),
        name: 'End of Old Glenfield Rd',
        latLong: '-33.95831091303822, 150.88704195766587',
        type: 'sunset',
        description: 'Looking out from Old Glenfield Rd towards Crossroads you get beautiful views of the sunset.',
        img: 'https://images.unsplash.com/photo-1604725333736-1f962a6218d0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww'
    },
    {
        id: generateRandomId(),
        name: 'Moonrise Lookout',
        latLong: '-33.858834877755044, 150.8577767306856',
        type: 'sunrise',
        description: 'Panoramic views of Western Sydney and the CBD skyline, great for sunrises.',
        img: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-sunrise-dolomites-belluno-provence-italy-1492545669.jpg'
    },
    {
        id: generateRandomId(),
        name: 'Panorama creek',
        latLong: '-33.96253904270283, 150.89110166786352',
        type: 'sunrise',
        description: 'On a clear day you can see the Sydney skyline from here, making it great for sunrise viewing.',
        img: 'https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?cs=srgb&dl=pexels-pixabay-163255.jpg&fm=jpg'
    }
];

function generateRandomId() {
    return Math.random().toString(36).slice(2, 11); // Simple random ID generator
}

export function addLocation() {
    try {
        const name = document.getElementById('name').value;
        const latLong = document.getElementById('lat-long').value;
        const type = document.querySelector('input[name="type"]:checked').value;
        const description = document.getElementById('description').value;
        const img = document.getElementById('img').value;
    } catch (e) {
        alert("You are missing one or more form entries.");
        return;
    }

    const newLocation = {
        id: generateRandomId(),
        name: name,
        latLong: latLong,
        type: type,
        description: description,
        img: img
    };

    // Add the new location to your existing locations array
    // locations.push(newLocation);

    // Print the updated locations array
    console.log(newLocation);

    // Optionally, reset the form after adding a location
    document.getElementById('new-location-form').reset();
}