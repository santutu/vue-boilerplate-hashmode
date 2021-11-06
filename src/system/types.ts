// 1 Transform the type to flag all the undesired keys as 'never'
type FlagExcludedType<Base, Type> = { [Key in keyof Base]: Base[Key] extends Type ? never : Key };

// 2 Get the keys that are not flagged as 'never'
type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];

// 3 Use this with a simple Pick to get the right interface, excluding the undesired type
type OmitType<Base, Type> = Pick<Base, AllowedNames<Base, Type>>;

// 4 Exclude the Function type to only get properties
export type CstrtType<T> = OmitType<T, Function>;

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type CstrtOmitType<T, K extends keyof T> = Omit<CstrtType<T>, K>
export type CstrtOptionalType<T, K extends keyof CstrtType<T>>
    = Optional<CstrtType<T>, K>

