<?php
/**
 * Field: Color Picker
 *
 * @since {{VERSION}}
 *
 * @package RBMFieldHelpers
 * @subpackage RBMFieldHelpers/includes/fields
 */

defined( 'ABSPATH' ) || die();

/**
 * Class RBM_FH_Field_ColorPicker
 *
 * @since {{VERSION}}
 */
class RBM_FH_Field_ColorPicker extends RBM_FH_Field {

	/**
	 * RBM_FH_Field_ColorPicker constructor.
	 *
	 * @since {{VERSION}}
	 *
	 * @var string $name
	 * @var string $label
	 * @var array $args
	 * @var mixed $value
	 */
	function __construct( $name, $label = '', $args = array(), $value = false ) {

		parent::__construct( $name, $label, $args, $value );
	}

	/**
	 * Outputs the field.
	 *
	 * @since {{VERSION}}
	 *
	 * @param string $name Name of the field.
	 * @param mixed $value Value of the field.
	 * @param string $label Field label.
	 * @param array $args Field arguments.
	 */
	public static function field( $name, $value, $label = '', $args = array() ) {

		$args = wp_parse_args( $args, array(
			'default'       => '#fff',
			'input_class'   => 'widefat',
			'input_atts'    => array(),
		) );

		$input_atts = array();
		foreach ( $args['input_atts'] as $attr_name => $attr_value ) {
			$input_atts[] = "$attr_name=\"$attr_value\"";
		}
		$input_atts = implode( ' ', $input_atts );
		?>
		<p class="rbm-field-colorpicker <?php echo $args['wrapper_class']; ?>">
			<label>
				<?php echo $label ? "<strong>$label</strong><br/>" : ''; ?>
				<input type="text" name="<?php echo $name; ?>" value="<?php echo $value ? $value : $args['default']; ?>"
				       class="<?php echo $args['input_class']; ?>"
				       data-default-color="<?php echo $args['default']; ?>"
					<?php echo $input_atts; ?> />
			</label>

			<?php echo $args['description'] ? "<br/><span class=\"description\">$args[description]</span>" : ''; ?>
		</p>
		<?php
	}
}