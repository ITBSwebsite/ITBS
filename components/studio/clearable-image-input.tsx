import { PatchEvent, unset, type ObjectInputProps, type StringInputProps } from 'sanity';

const buttonStyle = {
  marginTop: 8, border: '1px solid #e7c9c9', borderRadius: 7,
  padding: '7px 11px', background: '#fff8f8', color: '#9b2525',
  cursor: 'pointer', fontWeight: 600,
};

export function ClearableFeaturedImageInput(props: ObjectInputProps<any>) {
  return (
    <div>
      {props.renderDefault(props)}
      {props.value?.asset && (
        <button type="button" onClick={() => props.onChange(PatchEvent.from(unset()))} style={buttonStyle}>
          Remove featured image
        </button>
      )}
    </div>
  );
}

export function ClearableLegacyImageUrlInput(props: StringInputProps) {
  return (
    <div>
      {props.renderDefault(props)}
      {props.value?.trim() && (
        <button type="button" onClick={() => props.onChange(PatchEvent.from(unset()))} style={buttonStyle}>
          Clear legacy image URL
        </button>
      )}
    </div>
  );
}