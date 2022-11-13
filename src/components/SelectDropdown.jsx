import useOnClickOutside from "~/hooks/useClickOutside";
import { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down-icon.svg";
import { useDispatch } from "react-redux";
import { device } from "~/styles/breakpoints";

/**
 * * Dropdown input
 * @param {options} param0 select options
 * @param {setValue} param1 set selected value
 * @param {value} param2 selected value
 * @param {label} param2 select label
 * @returns Dropdown input
 */
export default function SelectDropdown({ options, setValue, value, label }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown if user clicks outside dropdown region
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <View ref={ref}>
      <div className="value" onClick={() => setOpen(!open)}>
        <label>{label}</label>
        <span className="value-text">{value}</span>
        <button className="icon" type="button">
          <ArrowDownIcon />
        </button>
      </div>
      {open ? (
        <div className="dropdown">
          <div className="options">
            {options.map((option) => {
              return (
                <div
                  key={option?.id}
                  className="option"
                  onClick={() => {
                    setOpen(false);
                    dispatch(setValue(option?.value));
                  }}
                >
                  {option?.value}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </View>
  );
}

SelectDropdown.propTypes = {
  options: PropTypes.array,
  setValue: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
};

const View = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  cursor: pointer;
  border-radius: 2px;

  .value {
    width: 100%;
    height: 100%;
    border: 0.5px solid ${({ theme }) => theme?.colors?.neutral_5};
    background-color: ${({ theme }) => theme?.colors?.background};
    border-radius: 2px;
    outline: none;
    padding: 12px;
    margin-top: 5px;
    transition: all 0.25s ease-in-out;
    position: relative;
    margin: 0;

    @media ${device.phone} {
      padding: 12px 8px;
    }

    .icon {
      background-color: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 12px;
      cursor: pointer;
    }

    label {
      position: absolute;
      top: -8px;
      left: 12px;
      background-color: ${({ theme }) => theme?.colors?.background};
      font-size: 0.7rem;
      padding: 2px 4px;
      color: ${({ theme }) => theme?.colors?.neutral_6};
    }

    .value-text {
      color: ${({ theme }) => theme?.colors?.neutral_7};

      @media ${device.phone} {
        font-size: 0.875rem;
      }
    }
  }

  .dropdown {
    width: 100%;
    z-index: 20;
    position: absolute;
    top: 55px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    background-color: ${({ theme }) => theme?.colors?.background};
    border: 0.5px solid ${({ theme }) => theme?.colors?.neutral_5};
    border-radius: 2px;

    .options {
      width: 100%;
      max-height: 220px;
      overflow-y: scroll;

      .option {
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.8rem;
        font-weight: 300;
        color: ${({ theme }) => theme?.colors?.neutral_6};

        &:hover {
          background-color: ${({ theme }) => theme?.colors?.neutral_4};
        }
      }
    }
  }
`;
