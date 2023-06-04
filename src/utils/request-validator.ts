import { toast } from 'react-toastify';

export function requestValidator(request: string, variables: string) {
  const requstWithoutNewLines = request.replace(/\n/g, '');
  const variablesWithoutNewLines = variables.replace(/\n/g, '');
  const map: { [key: string]: string } = {};
  const vars = requstWithoutNewLines.match(/\$\w{1,}:/g);

  if (vars?.length) {
    const clearedVars = vars.map((variable) => variable.replace(/\$/gi, '').replace(/:/gi, ''));
    for (let i = 0; i < clearedVars.length; i++) {
      const regExp = new RegExp(`${clearedVars[i]}": \\d{1,}`, 'g');
      const matched = variablesWithoutNewLines.match(regExp);
      if (!matched) {
        toast.error('You use variables in your request, but in section of variables we didnt find your variables. Check if you wrote the right way');
      }
      if (matched) {
        const cleared = matched.map((str) => str.replace(`${clearedVars[i]}":`, '').replace(',', '').trim()).toString();
        map[clearedVars[i]] = cleared;
      }
    }
    let requestWithoutVarsSection = requstWithoutNewLines.replace(/\((.+?)\)/, '');
    clearedVars.map((variable) => {
      const regExp = new RegExp(`\\$${variable}`, 'g');
      requestWithoutVarsSection = requestWithoutVarsSection.replace(regExp, map[variable]);
    });
    return requestWithoutVarsSection;
  }
  return 'There are no variables in your query';
}
