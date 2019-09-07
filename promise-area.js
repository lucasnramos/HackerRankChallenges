function calculateArea(shape, values) {
    return new Promise((resolve, reject) => {
        let area = 0;
        const [ n1,n2 ] = values;
        switch (shape) {
        case "square":
            area = n1 * n1;
            break;
        }

        if (area <= 0) reject(-1);
        area = +area.toFixed(2);
        resolve(area);
    });
}

function getAllAreas(shapes, values_arr) {
    return new Promise((reject, resolve) => {
        const areas = []

        for() {
            const area = calculateArea(shapes[i], values_arr[i]);
            areas.push(area);
        }

        Promise.all(areas)
            .then((_areas) => resolve(_areas))
            .catch(err => console.error(err));
    });
}
