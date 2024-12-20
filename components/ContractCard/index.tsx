import { useWeb3 } from '@3rdweb/hooks';
import { SOMOOLOS_CLUB_ADDRESS } from 'config';
import { useSmoolosClub } from 'hooks/useSmoolosClub';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';

interface IContractCardProps {
  totalBalance: any;
  styles?: any;
  ref?: any;
}

export const ContractCard = forwardRef<HTMLDivElement, IContractCardProps>(
  ({ totalBalance, styles }, ref) => {
    const [depositAmount, setDepositAmount] = useState('0');
    const [loading, setLoading] = useState(false);
    const [myBalance, setMyBalance] = useState('0');

    // const [withdrawAmount, setWithdrawAmount] = useState(0);

    const { address } = useWeb3();

    const { deposit, withdraw, owner, getMyBalance } = useSmoolosClub();

    const handleDeposit = (event: any) => {
      setDepositAmount(event.target.value);
    };

    const handleGetMyBalance = useCallback(async () => {
      const myBalance = await getMyBalance(address || '');

      setMyBalance(myBalance || '');
    }, [address]);

    useEffect(() => {
      handleGetMyBalance();
    }, [handleGetMyBalance]);

    // const handleWithdraw = (event: any) => {
    //   setWithdrawAmount(event.target.value);
    // };

    return (
      <div
        ref={ref}
        style={styles}
        className="flex flex-col max-w-md gap-6 p-5 mx-auto tracking-wide bg-black border rounded-md shadow-2xl xs:rotate-0 -rotate-2 border-neutral-600 font-audiowide"
      >
        <div className="flex flex-wrap justify-between">
          <CopyToClipboard
            text={SOMOOLOS_CLUB_ADDRESS || ''}
            onCopy={() => toast.success('smoolosClub contract copied')}
          >
            <button className="transition-all border-b border-transparent hover:border-white">
              <span className="text-white ">CONTRACT</span>
            </button>
          </CopyToClipboard>
          <span className="text-white ">MY BALANCE {myBalance} MATIC</span>
        </div>
        <div>
          <label className="block mb-2 text-xs font-bold text-neutral-600">
            Deposit Balance
          </label>
          <div className="grid grid-cols-5 gap-4">
            <input
              className="col-span-2 px-4 py-3 text-white rounded outline-none appearance-none placeholder:text-white bg-neutral-600 focus:bg-neutral-500"
              type="number"
              placeholder="0"
              onChange={handleDeposit}
              min="0"
            />
            <button
              className="flex items-center justify-center col-span-3 gap-2 p-2 px-4 transition-all bg-purple-500 rounded-md hover:scale-105"
              onClick={() => deposit(depositAmount)}
            >
              <span className="font-semibold">Deposit MATIC</span>
              {loading && (
                <AiOutlineLoading3Quarters
                  className="animate-spin"
                  size="1.2rem"
                />
              )}
              {!false && <FiPlusSquare size="1.2rem" />}
            </button>
          </div>
        </div>
        {address === owner && (
          <div>
            <label className="block mb-2 text-xs font-bold text-neutral-600">
              Withdraw Balance
            </label>
            <div className="grid  gap-4">
              {/* <input
              className="col-span-2 px-4 py-3 text-white rounded outline-none appearance-none placeholder:text-white bg-neutral-600 focus:bg-neutral-500"
              type="number"
              placeholder="0.0"
              onChange={handleWithdraw}
            /> */}
              <button
                className="flex items-center justify-center col-span-3 gap-2 p-2 px-4 transition-all bg-purple-500 rounded-md hover:scale-105"
                onClick={() => {
                  withdraw();
                }}
              >
                <span className="font-semibold">Withdraw MATIC</span>
                {loading && (
                  <AiOutlineLoading3Quarters
                    className="animate-spin"
                    size="1.2rem"
                  />
                )}
                {!false && <FiMinusSquare size="1.2rem" />}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

ContractCard.displayName = 'ContractCard';
