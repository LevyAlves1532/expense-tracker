import { useLanguage } from "../hooks/useLanguage";

const DeleteAlert = ({ content, onDelete }: { content: string, onDelete: () => void }) => {
  const { t } = useLanguage();

  return (
    <div>
      <p className="text-sm">
        {content}
      </p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={onDelete}
        >
          {t('dashboard.income.transactions.delete.button')}
        </button>
      </div>
    </div>
  );
}

export default DeleteAlert;
