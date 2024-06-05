export default function SetupFormComponent(
    props: { value: any },
    { emit }: any
  ) {
    const updateValue = (event: any) => {
      let val = event.target.value;
  
      if (event.target.type === "checkbox") val = event.target.checked;
      if (event.target.type === "radio") val = props.value;
  
      emit("update:modelValue", val);
    };
  
    return { updateValue };
  }
  