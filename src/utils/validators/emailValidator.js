export function emailValidator(input){
    const expr = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (expr.test(input)) return { valid: true };
    return { valid: false, message: "Ingrese un correo válido" };
}