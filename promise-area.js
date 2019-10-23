function calculateArea(shape, values) {
    return new Promise((resolve, reject) => {
        let area = 0;
        const [ n1,n2 ] = values;
        switch (shape) {
        case "square":
            area = n1 * n1;
            break;
        case "rectangle":
            area = n1 * n2;
            break;
        case "circle":
            area = 3.14 * (n1 * n1);
            break;
        case "triangle":
            area = 0.5 * n1 * n2;
            break;
        }

        if (area <= 0) reject([-1]);
        area = +area.toFixed(2);
        resolve(area);
    });

}

function getAllAreas(shapes, values_arr) {
    return new Promise((reject, resolve) => {
        const areas = []

        for(let i = 0; i < shapes.length; i++) {
            const area = calculateArea(shapes[i], values_arr[i]);
            areas.push(area);
        }

        Promise.all(areas)
            .then((_areas) => resolve(_areas))
            .catch(err => {
                console.error(err);
                reject([-1]);
            });
    });
}
