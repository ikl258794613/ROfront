
const CalculatorCard = ({handleInputLukChange,inputLuk,fell,handlechecked}) => {
  return (
    <>
        <div>
          <form>
            <label className="block bg-gray-300">
              職業：
              <select>
                <option value="盧恩騎士">盧恩騎士</option>
                <option value="基因學者">基因學者</option>
              </select>
            </label>
            <label className="block">
              <span>LUK:</span>
              <input type="number"  
              onChange={handleInputLukChange}
              value={inputLuk}
              min="0"/>
            </label>
            <label className="block bg-gray-300">
              <span>完全迴避:{fell}</span>
            </label>
            <label  className="block bg-gray-200">
              影子職業裝1.0
              <input className="ml-2" type="checkbox" onClick={(e)=>handlechecked(e)} />
            </label>
            <label  className="block bg-gray-200">
              料理
              <input className="ml-2" type="checkbox" value="" onClick={(e)=>handlechecked(e)}/>
            </label>
          </form>
        </div>
    </>
  );
};

export default CalculatorCard;
