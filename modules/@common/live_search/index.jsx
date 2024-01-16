import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./live_search.module.scss";

const LiveSearch = ({
  results = [],
  renderItem,
  value,
  onChange,
  onSelect,
  placeholder,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const wrapperRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

  const handleSelection = (selectedIndex) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect && onSelect(selectedItem);
    resetSearchComplete();
    setDefaultValue(selectedItem?.title);
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % results.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;

    // hide search results
    if (key === "Escape") {
      resetSearchComplete();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }
    setFocusedIndex(nextIndexCount);
  };

  const handleChange = (e) => {
    setDefaultValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;
    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);
    if (results.length <= 0) setShowResults(false);
  }, [results]);

  useEffect(() => {
    if (value) setDefaultValue(value);
  }, [value]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showResults &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showResults]);

  return (
    <div tabIndex={1} onKeyDown={handleKeyDown} className={`${styles.wrapper}`}>
      <input
        value={defaultValue}
        onChange={handleChange}
        type="text"
        className="border px-2 py-1"
        // className={`${styles.input}`}
        placeholder={placeholder ? placeholder : "Search your query"}
      />

      {/* Search Results Container */}
      {showResults && (
        <div className={`${styles.option_wrapper}`} ref={wrapperRef}>
          {results.map((item, index) => {
            return (
              <div
                key={index}
                onMouseDown={() => handleSelection(index)}
                ref={index === focusedIndex ? resultContainer : null}
                style={{
                  backgroundColor: index === focusedIndex ? "#f7f7fe" : "",
                  color: index === focusedIndex ? "#000" : "inherit",
                }}
                className={`${styles.option}`}
              >
                {renderItem(item)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LiveSearch;
