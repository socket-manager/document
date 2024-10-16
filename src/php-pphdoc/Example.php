<?php
/**
 * ファイルのタイトル的なもの
 * 
 * ファイル内容の説明的なもの
 * 
 * @license GPL
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @author 名前 <my.name@example.com>
 * @copyright 1997-2005 The PHP Group
 */

namespace Phpdoc\Sample;


/**
 * クラスのタイトル的なもの
 * 
 * クラスの説明的なもの
 */
class Example
{
    /**
     * 文章での説明が必要な時はここに書く
     * 
     * @var string | null $type_string 文字列データ or null
     */
    public ?string $type_string;

    /** @var int $type_int 整数データ */
    public int $type_int;

    /** @var bool $type_bool ブール値（true or false）データ */
    public bool $type_bool;

    /** @var float $type_float 浮動小数点数データ */
    public float $type_float;

    /** @var object $type_object 型を特定しないインスタンスデータ */
    public object $type_object;

    /** @var mixed $type_mixed 型を特定しないデータ */
    public $type_mixed;

    /** @var array $type_array 配列データ */
    public array $type_array;

    /** @var callable $type_callable コールバック */
    public $type_callable;

    /**
     * 共通（インライン可能）タグ用
     * 
     * * リスト表示１行目です
     * * リスト表示２行目です
     * 
     * ---
     * 
     * １行目
     * ２行目のつもり
     * 
     * ３行目
     * 
     * ---
     * 
     * # マークダウン１
     * 
     * 親クラスのプロパティ（{@see ParentClass::$items 継承プロパティ}）を継承します。
     * 
     * ## マークダウン２
     * 
     * リンク先のドキュメント（{@link http://example.com/ ドキュメント}）をご覧ください。
     * 
     * ### マークダウン３
     * 
     * @see http://example.com/     ドキュメントのタイトルなど
     * @see ParentClass::$items     関連するクラスプロパティの説明
     * @see ParentClass::setItems() 関連するクラスメソッドの説明
     * @link http://example.com/    リンク先ページ名
     */
    protected $items;


    /**
     * 関数（またはメソッド）のタイトル的なもの
     * 
     * 関数（またはメソッド）の説明的なもの
     * 
     * @since 1.0.2 $type_int引数の追加
     * @since 1.0.1 $type_string引数の追加
     * @since 1.0.0
     *
     * @param string $type_string               文字列データ
     * @param int $type_int                     整数データ
     * @param bool $type_bool                   ブール値（true or false）データ
     * @param float $type_float                 浮動小数点数データ
     * @param object $type_object               型を特定しないインスタンスデータ
     * @param mixed $type_mixed                 型を特定しないデータ
     * @param array $type_array                 配列データ
     * @param callable $type_callable           コールバック
     * @param self $type_self                   自身のインスタンスデータ
     * @return string | null                    文字列データ or null
     * @throws Exception                        ネイティブな例外クラス
     * @throws \Phpdoc\Sample\CustomException   カスタム例外クラス
     */
    public function exampleFunction
    (
        string $type_string,
        int $type_int,
        bool $type_bool,
        float $type_float,
        object $type_object,
        $type_mixed,
        array $type_array,
        $type_callable,
        self $type_self
    )
    {
        return '';
    }
}
