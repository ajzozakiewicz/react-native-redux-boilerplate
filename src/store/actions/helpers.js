export function startAction(type) {
    console.log('start action ', type);
    return { type };
}

export function successAction(type, json) {
    console.log('success action ', type);
    return { type, payload: json};
}

export function failureAction(type, error) {
    console.log('failure action ', type, error);
    return { type, payload: error, error: true };
}
