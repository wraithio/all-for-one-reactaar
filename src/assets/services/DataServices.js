let SayHello = async (userInput) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/SayHello/InputName/${userInput}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let AskingQs = async (userName, userTime) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/WakeUp/InputName/${userName}/${userTime}`
    );
    if (!promise.ok || userTime < 1 || userTime > 12) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let Add2Num = async (num1, num2) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Add2Num/Add2Num/${num1}/${num2}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let GtrLssThn = async (num1, num2) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/GtrThnLessThn/GtrLssThn/${num1}/${num2}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let MadLib = async (
  color,
  adjective,
  place,
  adjective_2,
  place_2,
  food_S,
  food_P,
  verb,
  noun_P,
  adjective_3
) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/MadLib/goMadLib/${color}/${adjective}/${place}/${adjective_2}/${place_2}/${food_S}/${food_P}/${verb}/${noun_P}/${adjective_3}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let OddEvn = async (num) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/OddEvn/goOddEvn/${num}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let ReverseWord = async (word) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/ReverseIt/GoReverseChar/${word}`
    );
    if (!promise.ok || isNaN(word) == false) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

let ReverseNum = async (num) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/ReverseIt/GoReverseNum/${num}`
    );
    if (!promise.ok || isNaN(num) == true) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch {
    return null;
  }
};

let Magic8 = async (string) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Magic8/goMagic8`
    );
    if (!promise.ok || !string.includes("?")) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};
let Restaurant = async (genre) => {
  try {
    const promise = await fetch(
      `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Restaurant/goRestaurant/${genre}`
    );
    if (!promise.ok) {
      let errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await promise.text();
    return data;
  } catch (error) {
    return null;
  }
};

export {
  SayHello,
  AskingQs,
  Add2Num,
  GtrLssThn,
  OddEvn,
  ReverseWord,
  ReverseNum,
  Magic8,
  Restaurant,
  MadLib,
};
